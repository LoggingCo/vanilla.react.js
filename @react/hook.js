export const { useState, useEffect } = (function () {
  const useState = () => {
    console.log(this);
  };

  const useEffect = () => {};

  return { useState, useEffect };
})();

const React = {
  useState,
  useEffect,
};

export default React;
