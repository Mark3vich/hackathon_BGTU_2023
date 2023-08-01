import { LayoutTestsComponent } from './components/ui/students/layout-tests/layout-tests.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/ui/students/login/login.component';
import { CreatingQuestionsComponent } from './components/ui/teacher/creating-questions/creating-questions.component';
import { LayoutAdministratorComponent } from './components/ui/administrator/layout-administrator/layout-administrator.component';
import { LayoutUsersComponent } from './components/ui/students/layout-users/layout-users.component';
import { CreateFormComponent } from './components/ui/administrator/create-form/create-form.component';
import { LayoutTeacherComponent } from './components/ui/teacher/layout-teacher/layout-teacher.component';

const routeStudents: Routes = [
  { path: '',                   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',              component: LoginComponent },  
  { path: 'create_tests',       component: LayoutTeacherComponent }, 
  { path: 'nextStage',          component: CreatingQuestionsComponent},
  { path: 'test',               component: LayoutTestsComponent},
  { path: 'administrator',      component: LayoutAdministratorComponent},
  { path: 'user',               component: LayoutUsersComponent},
  { path: 'create',             component: CreateFormComponent},
  { path: 'teacher',            component: LayoutTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeStudents)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
