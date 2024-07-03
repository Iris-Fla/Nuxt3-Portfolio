export default defineNuxtPlugin(() => {
    return {
        provide: {
            formatTags: (inputData: any[]) => {
                return inputData.map(tag => tag.id).join(',')
            },
        }
    }
})