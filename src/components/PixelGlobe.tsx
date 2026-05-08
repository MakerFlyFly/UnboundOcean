import { useEffect, useRef } from 'react'

type Point = {
  lat: number
  lon: number
  size: number
  shade: number
}

type Route = {
  from: [number, number]
  to: [number, number]
  phase: number
}

const POINTS: Point[] = [
  ...createRegion(1, 103, 8, 10, 54),
  ...createRegion(4, 102, 8, 9, 42),
  ...createRegion(-2, 118, 18, 11, 80),
  ...createRegion(16, 108, 8, 13, 48),
  ...createRegion(15, 101, 7, 9, 38),
  ...createRegion(12, 122, 7, 12, 48),
  ...createRegion(35, 105, 14, 12, 96),
  ...createRegion(22, 78, 12, 11, 70),
  ...createRegion(36, 138, 9, 10, 42),
  ...createRegion(-25, 134, 14, 12, 80),
  ...createRegion(52, 13, 14, 10, 60),
  ...createRegion(39, -98, 22, 12, 70),
]

const SPHERE_POINTS: Point[] = createSphereGrid()

const ROUTES: Route[] = [
  { from: [1.35, 103.82], to: [35.68, 139.76], phase: 0.08 },
  { from: [1.35, 103.82], to: [22.32, 114.17], phase: 0.22 },
  { from: [1.35, 103.82], to: [51.51, -0.12], phase: 0.38 },
  { from: [3.14, 101.69], to: [-6.2, 106.82], phase: 0.52 },
  { from: [10.82, 106.63], to: [14.6, 120.98], phase: 0.68 },
  { from: [13.75, 100.5], to: [37.77, -122.42], phase: 0.82 },
]

function createRegion(
  lat: number,
  lon: number,
  latSpread: number,
  lonSpread: number,
  count: number,
): Point[] {
  return Array.from({ length: count }, (_, index) => {
    const angle = index * 2.399963
    const radius = Math.sqrt((index + 0.5) / count)
    return {
      lat: lat + Math.sin(angle) * radius * latSpread,
      lon: lon + Math.cos(angle) * radius * lonSpread,
      size: 1 + ((index % 4) * 0.16),
      shade: 0.34 + ((index % 7) * 0.045),
    }
  })
}

function createSphereGrid(): Point[] {
  const points: Point[] = []

  for (let lat = -72; lat <= 72; lat += 6) {
    const rowScale = Math.max(Math.cos((lat * Math.PI) / 180), 0.24)
    const lonStep = Math.max(5, Math.round(9 / rowScale))

    for (let lon = -180; lon < 180; lon += lonStep) {
      const offset = ((lat + 90) / 6) % 2 === 0 ? 0 : lonStep / 2
      points.push({
        lat,
        lon: lon + offset,
        size: 0.72,
        shade: 0.12,
      })
    }
  }

  return points
}

function project(
  lat: number,
  lon: number,
  rotation: number,
  radius: number,
  centerX: number,
  centerY: number,
) {
  const phi = (lat * Math.PI) / 180
  const theta = ((lon + rotation) * Math.PI) / 180
  const x = radius * Math.cos(phi) * Math.sin(theta)
  const y = -radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.cos(theta)
  const depth = (z / radius + 1) / 2

  return {
    x: centerX + x,
    y: centerY + y,
    visible: z > -radius * 0.28,
    depth,
  }
}

function drawRoute(
  context: CanvasRenderingContext2D,
  route: Route,
  rotation: number,
  radius: number,
  centerX: number,
  centerY: number,
  progress: number,
) {
  const [fromLat, fromLon] = route.from
  const [toLat, toLon] = route.to
  const steps = 48
  const projected = []

  for (let index = 0; index <= steps; index += 1) {
    const t = index / steps
    const lat = fromLat + (toLat - fromLat) * t
    const lon = fromLon + (toLon - fromLon) * t
    const arcLift = Math.sin(Math.PI * t) * radius * 0.24
    const point = project(lat, lon, rotation, radius + arcLift, centerX, centerY)
    projected.push(point)
  }

  context.beginPath()
  projected.forEach((point, index) => {
    if (index === 0) {
      context.moveTo(point.x, point.y)
      return
    }
    context.lineTo(point.x, point.y)
  })
  context.strokeStyle = 'rgba(42, 42, 42, 0.22)'
  context.lineWidth = 1
  context.stroke()

  const pulseIndex = Math.floor(((progress + route.phase) % 1) * steps)
  const pulse = projected[pulseIndex]
  if (pulse) {
    context.beginPath()
    context.arc(pulse.x, pulse.y, 3.2, 0, Math.PI * 2)
    context.fillStyle = 'rgba(24, 24, 24, 0.42)'
    context.fill()
  }
}

export function PixelGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const sizeRef = useRef({ width: 0, height: 0, pixelRatio: 1 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    let animationFrame = 0
    let start = performance.now()
    const isVisible = { current: true }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.max(Math.floor(rect.width * pixelRatio), 1)
      const height = Math.max(Math.floor(rect.height * pixelRatio), 1)

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }

      sizeRef.current = {
        width: rect.width,
        height: rect.height,
        pixelRatio,
      }
    }

    const render = (time: number) => {
      const { width, height } = sizeRef.current
      if (width <= 0 || height <= 0) {
        updateSize()
      }

      const currentSize = sizeRef.current
      const isCompact = currentSize.width < 500

      context.setTransform(
        currentSize.pixelRatio,
        0,
        0,
        currentSize.pixelRatio,
        0,
        0,
      )
      context.clearRect(0, 0, currentSize.width, currentSize.height)

      const elapsed = reduceMotion.matches ? 0 : (time - start) / 1000
      const rotation = -112 + elapsed * 5.5
      const radius = Math.min(currentSize.width, currentSize.height) * 0.38
      const centerX = currentSize.width * 0.5
      const centerY = currentSize.height * 0.49
      const progress = (elapsed * 0.12) % 1

      const glow = context.createRadialGradient(
        centerX - radius * 0.22,
        centerY - radius * 0.18,
        radius * 0.08,
        centerX,
        centerY,
        radius * 1.25,
      )
      glow.addColorStop(0, 'rgba(255, 255, 255, 0.85)')
      glow.addColorStop(0.52, 'rgba(245, 244, 240, 0.36)')
      glow.addColorStop(1, 'rgba(225, 224, 219, 0)')
      context.fillStyle = glow
      context.beginPath()
      context.arc(centerX, centerY, radius * 1.32, 0, Math.PI * 2)
      context.fill()

      context.beginPath()
      context.ellipse(
        centerX,
        centerY + radius * 0.98,
        radius * 0.62,
        radius * 0.07,
        0,
        0,
        Math.PI * 2,
      )
      context.fillStyle = 'rgba(20, 20, 20, 0.08)'
      context.fill()

      for (let index = 0; index < SPHERE_POINTS.length; index += 1) {
        if (isCompact && index % 2 === 1) {
          continue
        }

        const point = SPHERE_POINTS[index]
        const projected = project(
          point.lat,
          point.lon,
          rotation,
          radius,
          centerX,
          centerY,
        )

        if (!projected.visible) {
          continue
        }

        const alpha = 0.035 + projected.depth * point.shade
        const size = point.size + projected.depth * 0.6
        context.fillStyle = `rgba(20, 20, 20, ${alpha.toFixed(3)})`
        context.fillRect(projected.x - size / 2, projected.y - size / 2, size, size)
      }

      const routes = isCompact ? ROUTES.slice(0, 4) : ROUTES
      routes.forEach((route) =>
        drawRoute(context, route, rotation, radius, centerX, centerY, progress),
      )

      for (let index = 0; index < POINTS.length; index += 1) {
        if (isCompact && index % 2 === 1) {
          continue
        }

        const point = POINTS[index]
        const projected = project(
          point.lat,
          point.lon,
          rotation,
          radius,
          centerX,
          centerY,
        )

        if (!projected.visible) {
          continue
        }

        const alpha = 0.14 + projected.depth * point.shade
        const size = point.size + projected.depth * 1.5
        context.fillStyle = `rgba(20, 20, 20, ${alpha.toFixed(3)})`
        context.fillRect(projected.x - size / 2, projected.y - size / 2, size, size)
      }

      context.beginPath()
      context.arc(centerX, centerY, radius, 0, Math.PI * 2)
      context.strokeStyle = 'rgba(15, 15, 15, 0.08)'
      context.lineWidth = 1
      context.stroke()

      if (!reduceMotion.matches && isVisible.current && !document.hidden) {
        animationFrame = window.requestAnimationFrame(render)
      }
    }

    const queueRender = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(render)
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrame)
        return
      }
      start = performance.now()
      queueRender()
    }

    updateSize()
    const resizeObserver = new ResizeObserver(() => {
      updateSize()
      queueRender()
    })
    resizeObserver.observe(canvas)

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible.current = entry.isIntersecting
      if (entry.isIntersecting) {
        start = performance.now()
        queueRender()
        return
      }
      window.cancelAnimationFrame(animationFrame)
    })
    intersectionObserver.observe(canvas)

    document.addEventListener('visibilitychange', onVisibilityChange)
    queueRender()

    return () => {
      window.cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return (
    <div className="pixel-globe" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
