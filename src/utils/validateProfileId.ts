export function isValidProfileId(profileId: string): boolean {
    return !isNaN(parseFloat(profileId)) && !isNaN(profileId as any)
}