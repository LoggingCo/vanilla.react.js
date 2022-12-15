export const { useState, useEffect } = (function () {
  let hookIndex = 0;
  const hooks = [];

  const useState = (initialValue) => {
    const state = hooks[hookIndex] || initialValue;
    hooks[hookIndex] = state;

    const setState = (function () {
      const currentHookIndex = hookIndex;

      return (value) => {
        hooks[currentHookIndex] = value;
        hookIndex = 0;
      };
    })();

    increaseIndex();
    return [state, setState];
  };

  const useEffect = (effect, deps) => {
    const prevDeps = hooks[hookIndex];
    const hasChanged = isFirstCall(prevDeps) || isDepsChanged(prevDeps, deps);
    if (hasChanged) {
      effect();
    }
    hooks[hookIndex] = deps;
    increaseIndex();
  };

  const increaseIndex = () => {
    hookIndex++;
  };

  return { useState, useEffect };
})();

function isDepsChanged(prevDeps, deps) {
  return deps.some((dep, idx) => dep !== prevDeps[idx]);
}

function isFirstCall(prevDeps) {
  return !prevDeps;
}

const React = {
  useState,
  useEffect,
};

export default React;
