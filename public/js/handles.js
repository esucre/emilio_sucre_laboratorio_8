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
        success: function (res){
          alert('Estudiante eliminado');
          location.reload();
        },
        error: function(err){
          console.error(err);
        }
      });

    });

    $('.btn.btn-dark.actualizar').on('click', function(e){
      e.preventDefault();
      $target = $(e.target);
      const id = $target.attr('data-estudianteid');
      console.log(id);
 
      $.ajax({
        type: 'GET',
        url: '/editar/'+id,
        success: function (res){
        $('#nombre').val(res.estudiante.nombre);
        $('#edad').val(res.estudiante.edad);
        console.log(response);
        // alert('Estudiante actualizado');
        // location.reload();
        },
        error: function(err){
        console.error(err);
        }   
      });

    });

    $('.btn.btn-primary.enviar').on('click', function(e){
      e.preventDefault();
      $target = $(e.target);
      const id = $target.attr('data-estudianteid');
      console.log(id);
 
      $.ajax({
        type: 'PUT',
        url: '/editar/'+id,
        success: function (res){
        alert('Estudiante actualizado');
        location.reload();
        },
        error: function(err){
        console.error(err);
        }   
      });

    });

  });