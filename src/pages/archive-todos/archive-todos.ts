import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../providers/todo-service/todo-service';

/**
 * Generated class for the ArchiveTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archive-todos',
  templateUrl: 'archive-todos.html',
})
export class ArchiveTodosPage {
public archivedTodos = [];
  constructor(private todoService: TodoService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.archivedTodos =  this.todoService.getArchivedTodos();
  }

}
