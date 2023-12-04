import {DependencyList, EffectCallback, useEffect, useRef} from "react";

function useEffectOnce(effect:EffectCallback, deps:DependencyList|undefined) {
  const calledOnce = useRef<boolean>(false);

  useEffect(() => {
    console.error('Stop using this hook for mounting/unmounting. Explanation in the source code.');
    let cleanup:any = null;
    if (!calledOnce.current) {
      cleanup = effect();
      calledOnce.current = true;
    }
    
    return () => {
      if (typeof cleanup === 'function') cleanup();
    }
  }, deps ?? []); // eslint-disable-line react-hooks/exhaustive-deps
}

/*
 You wrote this hook because you wanted to use useEffect for mounting/unmounting. But it's not good idea. The reasons
 are complicated enough that you'll probably forget them, so here's a reminder:
 
 * The reason useEffect() gets called twice for mounting is due to React strict mode, which is a safeguard to help
   identify problems with event code being written incorrectly.
 * The light bulb went off over your head to encapsulate the mounting/unmounting logic in a hook that only gets called
   once. But the actual events in dev are 1. mount, 2. unmount, 3. mount, 4. unmount. And in non-dev, it's 1. mount,
   2. unmount. You could write the hook to mount on the first call and unmount on the second call, but that will leave
   the component in an unready state for the first render. You could write the hook to mount on the first call and
   unmount on the fourth call, but that will break in production. And in general, you shouldn't be coupled to mount/unmount
   being called X number of times.
 * Another idea is to remove strict mode. But strict mode was meant to show problems where the unmount code in your
   cleanup function isn't mirroring the mount code. If this seems like a contrived problem, consider that your component
   can mount/unmount many times in production use, e.g. moving between screens. Strict mode will simply show problems
   sooner, without requiring the app to exercise code paths that would cause a mount/remount.
 * So what to do? I think this is the best approach:
   * For most side effects, e.g. subscribe/unsubscribe, let them just run in symmetrical mount/unmount code even 
     redundantly. In production, there's no performance penalty for this.
   * For side effects that are expensive, e.g. fetch() calls, use a boolean flag to have them run only once. It happens
     that expensive side effects don't usually have cleanup code.
 */

export default useEffectOnce;