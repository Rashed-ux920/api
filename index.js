let tbodyread = document.getElementById("tbody")
const del= document.getElementById("delete")
const up = document.getElementById("update")




//fetch function
fetch("http://localhost:3000/user")
// .then(res => console.log(res))
.then(res => res.json())
.then(json => {
    json.map(data =>{
        console.log(data.name);
        tbodyread.append(createtd(data.name,data.profile,data.email,data.status,data.role))
    })
})


// create td
function createtd(name,img,email,status,role){
    let td = document.createElement("tr")
    td.innerHTML = `

                        <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                                <img src="${img}" class="h-10 w-10 rounded-full" alt="">
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                    ${name}
                                </div>
                                <div class="text-sm text-gray-900">
                                    ${email}
                                </div>
                            </div>
                        </div>

                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 ">
                        ${status}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="text-sm text-gray-500">
                            ${role} 
                        </span>
                    </td>
    
    `; return td
}