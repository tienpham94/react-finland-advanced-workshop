# Key Note

- Can change props in React DevTools
- Take a look into react.memo for optimization, storing things in context will cause rerenders when things change when redux does complex optimizations under the hood especially with reselect
- useLayoutEffect runs before browser paints screen https://github.com/donavon/hook-flow
- use performance.now() in useLayoutEffect to measure performance, 60 frames per sec => not a lot of time budget
- If add some slowCalculation in useLayoutEffect can be painful for application performance
- Profiler currently only checks render, not in useLayoutEffect
- Time slicing: give different parts of the app different priority, still unstable
- Turn on caching always in Apollo is a bad idea, log user out but still display data
- Suspense has maxDuration commented out for now
- throw Promise suspense !!?
- Suspense => only when all children doesn't load then show, otherwise will show loader