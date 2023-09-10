import type { Post } from '$lib/components/types.js'

export const load = async ({ fetch }) => {
  const response = await fetch(`/api/projects`)
  const projects:Post[] = await response.json()

  return {
    projects
  }
}