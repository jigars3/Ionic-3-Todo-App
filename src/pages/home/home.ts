import { Component } from '@angular/core';
import { NavController,AlertController,reorderArray,ToastController } from 'ionic-angular';
import { ArchiveTodosPage } from "../archive-todos/archive-todos";
import { TodoService } from '../../providers/todo-service/todo-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];
  public reorderIsEnable = false;
  constructor(private toastController: ToastController,private todoService: TodoService,public navCtrl: NavController,private alertController: AlertController) {
    this.todos = this.todoService.getTodos();
  }
  toggleReorder(){
    this.reorderIsEnable = !this.reorderIsEnable;
  }
  itemReordered($event){
    reorderArray(this.todos,$event);
  }
  goToArchivePage(){
    this.navCtrl.push(ArchiveTodosPage);
  }
  archiveTodo(todoIndex){
    this.todoService.archivedTodo(todoIndex);
  }
  openTodoAlert(){
    let addToAlert = this.alertController.create({
      title: "Add a todo",
      message: "Enter your todo",
      inputs:[
      {
        type:"text",
        name:"addTodoInput"
      }],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text:"Add Todo",
          handler:(inputData)=>{
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoService.addTodo(todoText);
            addToAlert.onDidDismiss(()=>{
              let addTodoToast = this.toastController.create({
                message:"Todo is added",
                duration:2000
              });
              addTodoToast.present();
            })
          }
        }
      ]
    });
    addToAlert.present();
  }

  editTodo(todoIndex){
    let editToAlert = this.alertController.create({
      title: "Edit a todo",
      message: "Edit your todo",
      inputs:[
      {
        type:"text",
        name:"editTodoInput",
        value: this.todos[todoIndex]
      }],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text:"Edit Todo",
          handler:(inputData)=>{
            let todoText;
            todoText = inputData.editTodoInput;
            this.todoService.editTodo(todoText,todoIndex);
            editToAlert.onDidDismiss(()=>{
              let editTodoToast = this.toastController.create({
                message:"Todo is edited",
                duration:2000
              });
              editTodoToast.present();
            })
          }
        }
      ]
    });
    editToAlert.present();
  }


}
