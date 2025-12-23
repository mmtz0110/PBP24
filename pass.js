let user = 'admin';
let pw = '1234';
let status;

if(user == 'admi'){
  if(pw == '1234'){
    status = "Login Sukses";
  }else{
    status = "Salah Password";
  }
}else{
  status = "Salah Username";
}

console.log(status);