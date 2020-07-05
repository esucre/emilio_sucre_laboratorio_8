$(document).ready(function(){
    
    $('.btn.btn-danger.borrar').on('click', function(e){
      e.preventDefault();
      console.log('entro');
      $target = $(e.target);
      const id = $target.attr('data-estudianteid');
  
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

    $('.btn.btn-dark.editar').on('click', function(e){
      e.preventDefault();
      $target = $(e.target);
      const id = $target.attr('data-estudianteid');
 
      $.ajax({
        type: 'GET',
        url: '/editar/'+id,
        success: function (res){
        $('#nombre').val(res.estudiante.nombre);
        $('#edad').val(res.estudiante.edad);
        if(res.status==true){
          $('#actualizar').show();
          $('#actualizar').attr('data-estudianteid',res.estudiante._id);
        }
        else{
          $('#actualizar').hide();
        }
        $("input").keyup(()=>{
          if($('#nombre').val()==='' ||$('#edad').val()==='' ) {
            $('#actualizar').hide();
          }
          else{
            $('#actualizar').show();
          }
        })

        },
        error: function(err){
        console.error(err);
        }   
      });

    });

    $('.btn.btn-primary.actualizar').on('click', function(e){
      e.preventDefault();
      $target = $(e.target);
      const id = $target.attr('data-estudianteid');

      $.ajax({
        type: 'PUT',
        url: '/editar/'+id,
        data:{nombre:$('#nombre').val(), edad:$('#edad').val()},
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
