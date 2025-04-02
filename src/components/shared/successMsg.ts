import Swal from 'sweetalert2';




export const paymentSuccessMsg = () => {
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'Your payment is done. Thank you for making a purchase with us.',
      confirmButtonText: 'Done',
      confirmButtonColor: '#F6BB09',
    //   imageUrl: '/product/payment-success.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Payment Success',
    });
  };