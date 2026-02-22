let n=7;
for(let i=0; i<n-1; i++){
    let emp = ""
    for(let j=0; j<(n-i-2); j++){
        emp+=" "
    }
    for(let j=(n-2-i); j<n-1; j++){
        emp+="*"
    }
    
    for(let j=n-i; j<n; j++){
        emp+="*"
    }
    console.log(emp)
}
for(let i=0; i<1; i++){
    let temp = "" 
    for(let j=0; j<(n-i-2); j++){
        temp+=" "
    }
    for(let j=(n-2-i); j<n-1; j++){
        temp+="|"
    }
    console.log(temp)
}
