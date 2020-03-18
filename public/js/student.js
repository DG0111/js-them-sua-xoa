const dd = value => console.log(value); // hàm console tự tạo lè haha
let users = [
    {
        id: 1,
        name: "Nguyễn Thị Luyến",
        age: 16,
        gender: 2,
        class: "10A2",
        school: "Tốt Động"
    },
    {
        id: 2,
        name: "Nguyễn Thị Ngọc",
        age: 16,
        gender: 2,
        class: "10A2",
        school: "Tốt Động"
    },
    {
        id: 3,
        name: "Ngô Văn Long",
        age: 20,
        gender: 1,
        class: "PT-14311",
        school: "Fpoly"
    },
    {
        id: 4,
        name: "Nguyễn Thị Hằng",
        age: 20,
        gender: 2,
        class: "PT-14314",
        school: "Fpoly"
    },
];
let tBody = document.querySelector('#showData');
let showUsers = (array) => {
    var arrNew = array.map((value, index) => {
        let gender = value.gender != 1 ? 'female' : 'male';
        return `
                <tr>
                    <th>${index}</th>
                    <th>${value.name}</th>
                    <th>${value.age}</th>
                    <th>${gender}</th>
                    <th>${value.class}</th>
                    <th>${value.school}</th>
                    <th><button class="btn btn-danger" onclick="ct(${index})">Delete</button></th>
                    <th><button class="btn btn-danger" onclick="edit(${index})">Edit</button></th>
                </tr>`;
    });
    tBody.innerHTML = arrNew.join('');
};
showUsers(users); // Hiển thị danh sách dùng hàm tự tạo ở trên
let usersDelete = [];

function ct(j) {
    users.splice(j, 1);
    showUsers(users);
}

// show edit đổ dữ liệu vào ô input
let idEdit = document.querySelector('#editId');
let nameEdit = document.querySelector('#editName');
let ageEdit = document.querySelector('#editAge');
let genderEdit = document.querySelector('#editGender');
let classEdit = document.querySelector('#editClass');
let schoolEdit = document.querySelector('#editSchool');

function edit(z) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let modalSua = document.querySelector('.modalSua').style.display = 'block';
    let indexEdit = users[z];
    dd(indexEdit);
    idEdit.value = indexEdit.id;
    nameEdit.value = indexEdit.name;
    ageEdit.value = indexEdit.age;
    genderEdit.value = indexEdit.gender;
    classEdit.value = indexEdit.class;
    schoolEdit.value = indexEdit.school;
}

// end

// thực hiện sửa dữ liệu

let buttonSua = document.querySelector('#buttonSua');
let arrSaveEdit = {
    id: null,
    name: null,
    age: null,
    gender: null,
    class: null,
    school: null,
};

buttonSua.onclick = () => {
    arrSaveEdit.id = idEdit.value;
    arrSaveEdit.name = nameEdit.value;
    arrSaveEdit.age = ageEdit.value;
    arrSaveEdit.gender = genderEdit.value;
    arrSaveEdit.class = classEdit.value;
    arrSaveEdit.school = schoolEdit.value;
    let indexUsers = _.findIndex(users, (value)=>value.id == arrSaveEdit.id);
    users[indexUsers] = arrSaveEdit;
    showUsers(users);
    arrSaveEdit = {
        id: null,
        name: null,
        age: null,
        gender: null,
        class: null,
        school: null,
    };
    let modalSua = document.querySelector('.modalSua').style.display = 'none';
};
//end

// button close edit user

let buttonCloseEdit = document.querySelector('#buttonCloseEdit');
buttonCloseEdit.onclick = () => document.querySelector('.modalSua').style.display = 'none';

//end


// Thêm sinh viên
let arrSaveAdd = {
    id: null,
    name: null,
    age: null,
    gender: null,
    class: null,
    school: null,
};
let name = document.querySelector('#name');
let age = document.querySelector('#age');
let gender = document.querySelector('#gender');
let classS = document.querySelector('#classs');
let school = document.querySelector('#school');
let maxId = 0;
name.onchange = () => arrSaveAdd.name = name.value;
age.onchange = () => arrSaveAdd.age = age.value;
classS.onchange = () => arrSaveAdd.class = classS.value;
school.onchange = () => arrSaveAdd.school = school.value;
let buttonSaveAdd = document.querySelector('#addStudent');

buttonSaveAdd.onclick = () => {
    arrSaveAdd.gender = gender.value; // onchange lẽ gặp rắc rối nhỏ lên để vào đây
    users.forEach((value, index) => {
        if (value.id > maxId) {
            maxId = value.id;
        }
    });
    arrSaveAdd.id = ++maxId;
    dd(arrSaveAdd.name);
    users.push(arrSaveAdd);
    arrSaveAdd = {
        id: null,
        name: null,
        age: null,
        gender: null,
        class: null,
        school: null,
    };
    showUsers(users);
};



