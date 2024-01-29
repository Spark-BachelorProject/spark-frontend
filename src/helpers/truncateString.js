export function truncateString(str, num) {
  if (str.length > num) {
    let truncated = str.slice(0, num)
    if (
      truncated[truncated.length - 1] === ' ' ||
      truncated[truncated.length - 1] === '.' ||
      truncated[truncated.length - 1] === ','
    ) {
      truncated = truncated.slice(0, truncated.length - 2)
    }
    return truncated + '...'
  } else {
    return str
  }
}
