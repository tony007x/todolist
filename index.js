var data = [];
var hello = function () {
    var username = document.getElementById('username');
    if (!username.value) {
        var newElement = document.getElementById('textError');
        newElement.textContent = "Please fill the form!";
        newElement.style.color = 'red';
        return;
    }
    create(username.value);
    username.value = '';
};
var create = function (data) {
    var newNameDiv = document.getElementById('newName');
    var newElement = document.getElementById('textError');
    newElement.textContent = "";
    if (newNameDiv) {
        var newDiv = document.createElement('div');
        newDiv.className = "box";
        // newDiv.style.display = "flex";
        var newdes = document.createElement('div');
        var textElement_1 = document.createElement('p');
        textElement_1.textContent = data;
        var checkbox_1 = document.createElement('input');
        checkbox_1.id = 'check'; // ใช้ id ที่ไม่ซ้ำ
        checkbox_1.type = 'checkbox';
        // เพิ่ม event listener ให้กับ checkbox ที่สร้างใหม่
        checkbox_1.addEventListener('change', function () {
            if (checkbox_1.checked) {
                textElement_1.style.color = 'red'; // เปลี่ยนสีเป็นแดงถ้า checkbox ถูกเลือก
                checkbox_1.disabled = true;
            }
            else {
                textElement_1.style.color = ''; // คืนค่ากลับเป็นปกติถ้าไม่ถูกเลือก
            }
        });
        newDiv.appendChild(checkbox_1);
        newDiv.appendChild(textElement_1);
        newNameDiv.appendChild(newDiv);
    }
};
