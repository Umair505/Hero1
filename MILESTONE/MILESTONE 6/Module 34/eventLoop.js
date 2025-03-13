function a(){
    b();
    console.log('I am in a()');
}

function b(){
    c();
    console.log('I am in b()');
}
function c(){
    d();
    console.log('I am in c()');
}
function d(){
    console.log('I am in d()');
}
a();