function useDarkMode() {
  const isDark = ref(false);

  function setDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    isDark.value = true;
  }

  function setLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    isDark.value = false;
  }

  onMounted(() => {
    if (
      localStorage.theme === 'dark'
      || (localStorage.theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark();
    }
  });

  return {
    setLight,
    setDark,
    isDark,
  };
}
export default useDarkMode;
