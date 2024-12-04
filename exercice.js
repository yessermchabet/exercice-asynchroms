Ex1
    const attente=()=> new Promise((resolve)=> setTimeout(resolve, 2000))
    
    var tab = [2,4,8,9,6]
    
    var affiche=async(t)=>{
        for (let i = 0; i < t.length; i++) {
            console.log(t[i])  
            await attente()      
        }
    }
    
    affiche(tab)
Ex2
    const awaitCall=()=> fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json()).then((json)=>console.log(json)).catch((err)=>console.log(err))
    
    awaitCall()
Ex3
    
const awaitCall=async()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
    
awaitCall()
    
Ex4
    
const attente=()=> new Promise((resolve)=>setTimeout(resolve,2000))
    
const fun1=async()=>{
        await attente()
        console.log('This is function 1')
    }
    
    const fun2=async()=>{
        await attente()
        console.log('This is function 2')
    }
    
    const fun3=async()=>{
        await attente()
        console.log('This is function 3')
    }
    
    const chainedAsyncFunctions=async()=>{
        await fun1()
        await fun2()
        await fun3()
    }
    
    chainedAsyncFunctions()
    
// Ex 5
    
    const conso1=async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users/10')
        const data = await res.json()
        return data
    }
    
    const conso2=async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await res.json()
        return data
    }
    
    const concurrentRequests=async()=>{
        const tab = await Promise.all([conso1(),conso2()])
        
        for (let i = 0; i < tab.length; i++) {
           console.log(tab[i].name)        
        }
    }
    
    concurrentRequests()
    
// Ex6
    
    var tabApi = [
        "https://jsonplaceholder.typicode.com/users/2",
        "https://jsonplaceholder.typicode.com/users/7",
    ]
    
    const consoApi=async(url)=>{
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    
    const parallelCalls=async()=>{
        var apis = tabApi.map((el,i,t)=> consoApi(el))
    
        const tab = await Promise.all(apis)
    
            for (let i = 0; i < tab.length; i++) {
           console.log(tab[i].name)        
        }
    
    }
    
    parallelCalls()