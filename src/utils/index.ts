/**
 * This function returns executable script as string by removing container string.
 * @param {string} scriptContainerString This argument is string that contains executable script.
 * @return {string} Return value is executable script as string.
 */
export function extractScriptAsString(scriptContainerString: string): string {
  return scriptContainerString.replace(/^.+?\{/s, '').replace(/\};?$/s, '');
}
