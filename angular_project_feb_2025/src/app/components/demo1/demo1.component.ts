import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar'

@Component({
  selector: 'app-demo1',
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  faStar = faStar;
  faAddressBook = faAddressBook;

  openSnackBar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }

  openAlert1() {
    alert('Helloooooooooo')
  }
  openAlert2() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "error"
    });
  }
  openAlert3() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
}
