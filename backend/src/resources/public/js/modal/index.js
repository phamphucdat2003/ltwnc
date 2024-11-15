function showAlert(type,title) {
  const modalElement = document.createElement('div');
  let iconClass;
  switch (type) {
    case 'success':
      iconClass = 'bi bi-check-circle-fill';
      break;
    default:
      iconClass = '';
      break;
  }

  modalElement.innerHTML = `
    <div class="modal fade" id="${type}Modal" tabindex="-1" aria-labelledby="${type}ModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-${type}" id="${type}ModalLabel">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <i class="${iconClass} text-${type}" style="font-size: 3rem;"></i>
            <p class="mt-3">Cập nhật thành công!</p>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modalElement);
  const Modal = new bootstrap.Modal(modalElement.querySelector(`#${type}Modal`));
  Modal.show();
  modalElement.querySelector(`#${type}Modal`).addEventListener('hidden.bs.modal', function () {
    window.location.reload();
  });
  setTimeout(() => {
    window.location.reload()
  }, 3000);
}


function created(object) {
  const createUser = () => {
    var modalElement = document.createElement('div');
    modalElement.innerHTML = `
      <div class="modal fade" id="createUserModal" tabindex="-1" aria-labelledby="createUserModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="createUserModalLabel">Thêm người dùng</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="createForm" class="p-4 border rounded shadow-sm bg-light">
                  <div class="mb-3">
                    <label for="username" class="form-label fw-bold">Tên tài khoản</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="bi bi-person"></i>
                      </span>
                      <input type="text" class="form-control" id="username" name="username" placeholder="Nhập username" required  />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label fw-bold">Mật khẩu</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="bi bi-card-text"></i>
                      </span>
                      <input type="password" class="form-control" id="password" name="password" placeholder="Nhập password" required />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="fullname" class="form-label fw-bold">Họ và tên</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="bi bi-card-text"></i>
                      </span>
                      <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Nhập họ và tên" required />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label fw-bold">Địa chỉ</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="bi bi-house"></i>
                      </span>
                      <input type="text" class="form-control" id="address" name="address" placeholder="Nhập địa chỉ" required />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label fw-bold">Giới tính</label>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="sexMale" name="sex" value="1"/>
                      <label class="form-check-label" for="sexMale">Nam</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" id="sexFemale" name="sex" value="0"/>
                      <label class="form-check-label" for="sexFemale">Nữ</label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label fw-bold">Email</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <i class="bi bi-envelope"></i>
                      </span>
                      <input type="email" class="form-control" id="email" name="email" placeholder="Nhập địa chỉ email" required />
                    </div>
                  </div>
                </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button class="btn btn-primary ms-auto" type="button" id="submitcreate">
                <i class="bi bi-plus-circle"></i> Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  
    document.body.appendChild(modalElement);
    var myModal = new bootstrap.Modal(modalElement.querySelector('#createUserModal'));
    myModal.show();
    
    modalElement.querySelector('#submitcreate').addEventListener('click', function () {
        const form = document.getElementById('createForm');
        const formData = {
            username: form.username.value,
            password: form.password.value,
            fullname: form.fullname.value,
            address: form.address.value,
            sex: form.sexMale.checked ? 1 : 0,
            email: form.email.value,
        };
      fetch(`/api/createuser`, {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(result => {
        myModal.hide()
        showAlert("success","Thêm thành công");
        
      })
      .catch(error => {
          console.error('Lỗi:', error);
      });
    });
    
    modalElement.querySelector('#createUserModal').addEventListener('hidden.bs.modal', function () {
        modalElement.remove();
    });
  }


  switch (object) {
    case "user":
      createUser()
      break;
    default:
            console.log(`Unknown update oject: ${object}`);
  }
}
function view(object,id) {
  const viewUser = (id) => {
      fetch(`/api/getuserbyid/${id}`)
      .then(response => response.json())
      .then(async(data) => {
          var modalElement = document.createElement('div');
          modalElement.innerHTML = `
         <div class="modal fade" id="viewUserModal" tabindex="-1" aria-labelledby="viewUserModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content border-0 shadow-lg">
              <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="viewUserModalLabel">Thông tin người dùng</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-4">
                <div class="card border-0">
                  <div class="card-body">
                    <div class="mb-3">
                      <h6 class="fw-bold text-muted">Tên đăng nhập</h6>
                      <p class="mb-0">${data.username}</p>
                    </div>
                    <div class="mb-3">
                      <h6 class="fw-bold text-muted">Họ và tên</h6>
                      <p class="mb-0">${data.fullname}</p>
                    </div>
                    <div class="mb-3">
                      <h6 class="fw-bold text-muted">Địa chỉ</h6>
                      <p class="mb-0">${data.address}</p>
                    </div>
                    <div class="mb-3">
                      <h6 class="fw-bold text-muted">Giới tính</h6>
                      <p class="mb-0">${data.sex === 1 ? 'Nam' : 'Nữ'}</p>
                    </div>
                    <div class="mb-3">
                      <h6 class="fw-bold text-muted">Email</h6>
                      <p class="mb-0">${data.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer border-0">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              </div>
            </div>
          </div>
        </div>
        `;
      
        document.body.appendChild(modalElement);
        var myModal = new bootstrap.Modal(modalElement.querySelector('#viewUserModal'));
        myModal.show();
        modalElement.querySelector('#viewUserModal').addEventListener('hidden.bs.modal', function () {
            modalElement.remove();
        });
      
      })
      .catch(error => {
          console.error('Lỗi:', error);
      });
  }
  switch (object) {
      case "user":
          viewUser(id)
          break;
      default:
          console.log(`Unknown update oject: ${object}`);
  }
}

function updated(object,id) {
    const updateUser = (id) => {
        fetch(`/api/getuserbyid/${id}`)
        .then(response => response.json())
        .then(async(data) => {
            var modalElement = document.createElement('div');
            modalElement.innerHTML = `
            <div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="updateUserModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="updateUserModalLabel">Cập nhật người dùng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <form id="updateForm" class="p-4 border rounded shadow-sm bg-light">
                        <div class="mb-3">
                          <label for="username" class="form-label fw-bold">Tên tài khoản</label>
                          <div class="input-group">
                            <span class="input-group-text">
                              <i class="bi bi-person"></i>
                            </span>
                            <input type="text" class="form-control" value="${data.username}" disabled />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="fullname" class="form-label fw-bold">Họ và tên</label>
                          <div class="input-group">
                            <span class="input-group-text">
                              <i class="bi bi-card-text"></i>
                            </span>
                            <input type="text" class="form-control" id="fullname" name="fullname" value="${data.fullname}" placeholder="Nhập họ và tên" required />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="address" class="form-label fw-bold">Địa chỉ</label>
                          <div class="input-group">
                            <span class="input-group-text">
                              <i class="bi bi-house"></i>
                            </span>
                            <input type="text" class="form-control" id="address" name="address" value="${data.address}" placeholder="Nhập địa chỉ" required />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label fw-bold">Giới tính</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" id="sexMale" name="sex" value="1" ${data.sex === 1 ? 'checked' : ''} />
                            <label class="form-check-label" for="sexMale">Nam</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" id="sexFemale" name="sex" value="0" ${data.sex === 0 ? 'checked' : ''} />
                            <label class="form-check-label" for="sexFemale">Nữ</label>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="email" class="form-label fw-bold">Email</label>
                          <div class="input-group">
                            <span class="input-group-text">
                              <i class="bi bi-envelope"></i>
                            </span>
                            <input type="email" class="form-control" id="email" name="email" value="${data.email}" placeholder="Nhập địa chỉ email" required />
                          </div>
                        </div>
                      </form>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-primary" type="button" id="submitUpdate">
                    <i class="bi bi-plus-circle"></i> Cập nhật
                    </button>
                    <button type="button" class="btn btn-secondary  ms-auto" data-bs-dismiss="modal">Đóng</button>
                  </div>
                </div>
              </div>
            </div>
          `;
        
          document.body.appendChild(modalElement);
          var myModal = new bootstrap.Modal(modalElement.querySelector('#updateUserModal'));
          myModal.show();
        
          modalElement.querySelector('#submitUpdate').addEventListener('click', function () {
              const form = document.getElementById('updateForm');
              const formData = {
                  id: data.id,
                  fullname: form.fullname.value,
                  address: form.address.value,
                  sex: form.sexMale.checked ? 1 : 0,
                  email: form.email.value,
              };
        
            fetch(`/api/updateuser`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(result => {
              myModal.hide()
              showAlert("success","cập nhật thành công");
              
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });
          });
        
          modalElement.querySelector('#updateUserModal').addEventListener('hidden.bs.modal', function () {
              modalElement.remove();
          });
        
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
    }
    switch (object) {
        case "user":
            updateUser(id)
            break;
        default:
                console.log(`Unknown update oject: ${object}`);
    }
}



function deleted(object,id) {
  const deleteUser = (id) => {
    var modalElement = document.createElement('div');
    modalElement.innerHTML = `
      <div class="modal fade" id="deleteUserModal" tabindex="-1" aria-labelledby="deleteUserModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
          <div class="modal-content border-0 shadow">
            <div class="modal-header bg-danger text-white">
              <h5 class="modal-title" id="deleteUserModalLabel">
                <i class="bi bi-exclamation-triangle-fill me-2"></i> Xóa người dùng
              </h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center p-4">
              <div class="mb-3">
                <i class="bi bi-person-x-fill text-danger" style="font-size: 3rem;"></i>
              </div>
              <p class="mb-0 fs-5 text-muted">Bạn có chắc chắn muốn xóa người dùng này không?</p>
              <p class="text-danger fw-bold mt-2">Thao tác này không thể hoàn tác!</p>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <button class="btn btn-danger" type="button" id="submitDelete">
                <i class="bi bi-trash-fill"></i> Xóa
              </button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modalElement);
    var myModal = new bootstrap.Modal(modalElement.querySelector('#deleteUserModal'));
    myModal.show();
  
    modalElement.querySelector("#submitDelete").addEventListener("click", function () {
      fetch(`/api/deleteuser`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
      })
      .then(response => response.json())
      .then(result => {
        myModal.hide();
        showAlert("success", "Người dùng đã được xóa thành công");
        
      })
      .catch(error => {
        console.error('Lỗi:', error);
        showAlert("danger", "Xóa người dùng thất bại");
      });
    });
  
    modalElement.querySelector('#deleteUserModal').addEventListener('hidden.bs.modal', function () {
      modalElement.remove();
    });
  };
  

  switch (object) {
    case "user":
      deleteUser(id)
        break;
    default:
            console.log(`Unknown delete oject: ${object}`);
  }
}


function modal(action,id) {
    switch(action.name) {
        case 'create':
            created(action.object)
            break;
        case 'view':
            view(action.object,id)
            break;
        case 'update':
            updated(action.object,id)
            break;
        case 'delete':
            deleted(action.object,id);
            break;
        default:
            console.log(`Unknown action: ${action}`);
    }
}