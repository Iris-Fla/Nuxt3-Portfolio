export const useData = () => {
    return useState('userdata', () => ref({
        dataList: [
            { id: 1, name:"suiren"},
            { id: 2, name:"meru"},
        ],
        progress: 0,
    }))
}