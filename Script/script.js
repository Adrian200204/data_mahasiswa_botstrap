const inputnim = document.getElementById("input-nim");
const inputnama = document.getElementById("input-nama");
const dataContainer = document.querySelector("tbody.data-container");

let mhsDatas = [];

function editHandler(event){
  const editId = event.target.getAttribute("mhsId");
  edit_data(editId);
}

function deleteHandler(event){
  const dataId = event.target.getAttribute("mhsId");
  delete_data(dataId);
}

function renderData() {
  $("tbody.data-container").html("");
  mhsDatas.forEach(function (el, i) {
    $("tbody.data-container").append( `
              <tr>
                <th>${i + 1}</th>
                <th>${el.nim}</th>
                <th>${el.name}</th>
                <th>
                  <button 
                    mhsId="${i}" 
                    class="edit-btn btn btn-success" 
                    onclick="editHandler(event)"
                    style="padding-top:2px">
                    Edit
                  </button>
                  ||
                  <button
                    mhsId="${i}"
                    class="delete-btn btn btn-danger"
                    onclick="deleteHandler(event)"
                    style="padding-top:2px">
                    Delete
                  </button>
                </th>
              </tr>
   `);
  });

}


function edit_data(id) {
  mhsDatas.forEach((mhs, i) => {
    if (i == id) {
      mhs.nim = prompt("Nim akan diganti menjadi =");
      mhs.name = prompt("Nama akan diganti menjadi =");
    }
  });
  renderData();
}

function delete_data(id) {
  
  if (confirm("Yakin ingin menghapus?")) {
    const arrayan = mhsDatas.filter((mhs, i) => i != id);
    mhsDatas = arrayan;
  } else {
    txt = "Cancel";
  }
  renderData();
}

$("#btn-submit").click(function(e){
  e.preventDefault();

  mhsDatas.push({ nim: inputnim.value, name: inputnama.value });

  renderData();
})
