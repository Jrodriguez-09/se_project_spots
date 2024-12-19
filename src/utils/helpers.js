export function setButtonText(
  button,
  isLoading,
  defaultText = "Save",
  loadingText = "Saving..."
) {
  if (isLoading) {
    button.textContent = loadingText;
    console.log(`Setting text to ${loadingText}`);
  } else {
    button.textContent = defaultText;
  }
}
