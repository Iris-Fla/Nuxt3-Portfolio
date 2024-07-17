export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  try {
    const response = await $fetch('/blog?fm=webp', {
      baseURL: config.public.baseURL,
      headers: {
        "X-MICROCMS-API-KEY": config.apiKey,
      },
    })
    return response
  } catch (error) {
    console.error('Error fetching blog list:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching blog list',
    })
  }
})