export function getUserId(): number {
  return 1;
}

export function checkUserId(userId: number): boolean {
  if (userId !== 1) {
    return false;
  }

  return true;
}
