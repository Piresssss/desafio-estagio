var app = new (function () {
  this.el = document.getElementById("tasks");
  this.tasks = [];

  /* Mostrar todas as metas cadastradas */
  this.FetchAll = function () {
    var data = "";

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + ". " + this.tasks[i] + "</td>";
        data +=
          '<td><button onclick="app.Edit(' +
          i +
          ')" class="btn btn-warning">Editar</button></td>';
        data +=
          '<td><button onclick="app.Delete(' +
          i +
          ')" class="btn btn-danger">Excluir</button></td>';
        data += "</tr>";
      }
    }
    this.Count(this.tasks.length);
    return (this.el.innerHTML = data);
  };

  /* Cadastrar metas */
  this.Add = function () {
    el = document.getElementById("add-goal");
    let task = el.value;
    if (task) {
      this.tasks.push(task.trim());
      this.el.value = "";
      this.FetchAll();
    }
  };

  /* Atualizar metas */
  this.Edit = function (item) {
    el = document.getElementById("edit-goal");
    this.el.value = this.tasks[item];
    document.getElementById("edit-box").style.display = "block";
    self = this;

    document.getElementById("save-edit").onsubmit = function () {
      let task = el.value;
      if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.FetchAll();
        CloseInput();
      }
    };
  };

  /* Excluir metas */
  this.Delete = function (item) {
    this.tasks.splice(item, 1);
    this.FetchAll();
  };

  /* Mostrar quantidade de metas cadastradas */
  this.Count = function (data) {
    let el = document.getElementById("counter");
    let name = "Metas cadastradas";
    if (data) {
      if (data == 1) {
        name = "Meta cadastrada";
      }
      el.innerHTML = data + " " + name;
    } else {
      el.innerHTML = "Sem " + name.toLowerCase();
    }
  };
})();

app.FetchAll();

function CloseInput() {
  document.getElementById("edit-box").style.display = "none";
}
