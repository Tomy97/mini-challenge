import Swal from 'sweetalert2'

export const useToast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  allowOutsideClick: true,
  timer: 2000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})