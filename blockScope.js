const age= 30;

if (true) {
    const age =40;
    const name ='Arbab';
    console.log('Inside 1st block',age,name);
    if (true) {
        const age =50;
        const test ='Hassan';
        console.log('Inside 1st block',age,test);
    }
}
console.log('outside block',age);