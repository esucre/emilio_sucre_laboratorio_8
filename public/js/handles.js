$(document).ready(function(){
    
    $('.btn.btn-danger.borrar').on('click', function(e){
      e.preventDefault();
      console.log('entro');
      $target = $(e.target);
      const id = $target.attr('data-estudianteid');
      console.log(id);
  
      $.ajax({
        type: 'DELETE',
        url: '/eliminar/'+id,
        success: function (response){
          console.log(response);
          alert('Estudiante eliminado');
          location.reload();
        },
        error: function(err){
          console.error(err);
        }        
      });
    });

    $.ajax({
      type: 'PUT',
      url: '/editar/'+id,
      success: function (response){
        console.log(response);
        alert('Estudiante actualizado');
        location.reload();
      },
      error: function(err){
        console.error(err);
      }        
    });

  });