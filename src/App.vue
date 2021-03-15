<template>  
<div>
  <nav>
    <div class="nav-wrapper  blue darken-4 pl-5">
      <div class="brand-logo">Remesas</div>
    </div>
     
  </nav>
  <div class="container">

  
<div class="row"  style="margin-top: 40px;">
 <div class="col s12  ">
    <div class="card  darken-1">
      <div class="card-content">
        <span class="card-title center">Transferencias / Terceros</span>
          <div class="row">
            <form class="col s12" @submit.prevent="submit">
              <div class="row ">
                <div class="col s4"> 
                 

  
                  <div class="input-field">
                   
                    <input type="text" name="name" :class="{ 'invalid': $v.form.Expediteur.$error }" v-model.trim="$v.form.Expediteur.$model"  />
                    <label for="last_name">Expediteur N°</label>
                    <span v-if="submitStatus && !$v.form.Expediteur.required.$error"  :class="{ 'invalid helper-text': $v.form.Expediteur.$error }"  data-error="Campo invalido"></span>
                    
                 
                  </div>
                  <div class="input-field">
                    <input type="text" :class="{ 'invalid': $v.form.Nombres.$error }" v-model.trim="$v.form.Nombres.$model" />
                    <label for="last_name">Nombres</label>
                    <span v-if="submitStatus && !$v.form.Nombres.required.$error"  :class="{ 'invalid helper-text': $v.form.Nombres.$error }"  data-error="Campo invalido"></span>
                  </div>
                  <div class="input-field ">
                    <input type="text" :class="{ 'invalid': $v.form.Apellidos.$error }" v-model.trim="$v.form.Apellidos.$model" />
                    <label for="last_name">Apellidos</label>
                     <span v-if="submitStatus && !$v.form.Apellidos.required.$error"  :class="{ 'invalid helper-text': $v.form.Apellidos.$error }"  data-error="Campo invalido"></span>
                  </div>
               <div class="row">
          <div class="input-field col s7 ">
          <input type="text" :class="{ 'invalid': $v.form.Direccion.$error }" v-model.trim="$v.form.Direccion.$model"  />
          <label for="last_name">Direccion</label>
          <span v-if="submitStatus && !$v.form.Direccion.required.$error"  :class="{ 'invalid helper-text': $v.form.Direccion.$error }"  data-error="Campo invalido"></span>
                  
        </div>
        <div class="input-field col s5">
          <input type="text"  :class="{ 'invalid': $v.form.Postal.$error }" v-model.trim="$v.form.Postal.$model"  />
          <label for="last_name">Codigo Postal</label>
           <span v-if="submitStatus && !$v.form.Postal.required.$error"  :class="{ 'invalid helper-text': $v.form.Postal.$error }"  data-error="Campo invalido"></span>
             
        </div>
        </div>
          <div class="input-field ">
                <input type="text" :class="{ 'invalid': $v.form.Ciudad.$error }" v-model.trim="$v.form.Ciudad.$model"/>
                <label for="last_name">Cuidad</label>
                 <span v-if="submitStatus && !$v.form.Ciudad.required.$error"  :class="{ 'invalid helper-text': $v.form.Ciudad.$error }"  data-error="Campo invalido"></span>
             
              </div>
            <div class="input-field ">
                <input type="text" :class="{ 'invalid': $v.form.Pais.$error }" v-model.trim="$v.form.Pais.$model" />
                <label for="last_name">Pais</label>
                 <span v-if="submitStatus && !$v.form.Pais.required.$error"  :class="{ 'invalid helper-text': $v.form.Pais.$error }"  data-error="Campo invalido"></span>
             
              </div>

        <div class="row">
          <div class="input-field col s6">
          <input type="text" :class="{ 'invalid': $v.form.Movil.$error }" v-model.trim="$v.form.Movil.$model" @input="acceptNumber" />
          <label for="last_name">N° movil</label>
           <span v-if="submitStatus && !$v.form.Movil.required.$error"  :class="{ 'invalid helper-text': $v.form.Movil.$error }"  data-error="Campo invalido"></span>
             
        </div>
        <div class="input-field col s6">
          <input type="text" :class="{ 'invalid': $v.form.MovilAux.$error }" v-model.trim="$v.form.MovilAux.$model"  @input="acceptNumber"/>
          <label for="last_name">N° movil auxiliar</label>
          <span v-if="submitStatus && !$v.form.MovilAux.required.$error"  :class="{ 'invalid helper-text': $v.form.MovilAux.$error }"  data-error="Campo invalido"></span>
             
        </div>
      </div>
            <div class="input-field ">
          <input type="text"  :class="{ 'invalid': $v.form.Facebook.$error }" v-model.trim="$v.form.Facebook.$model"  /> 
          <label for="last_name">Facebook</label>
            
        </div>
        <div class="input-field ">
          <input type="text" :class="{ 'invalid': $v.form.Mail.$error }" v-model.trim="$v.form.Mail.$model"   />
          <label for="last_name">Mail</label>
          <span v-if="submitStatus && !$v.form.Mail.required.$error"  :class="{ 'invalid helper-text': $v.form.Mail.$error }"  data-error="Campo invalido"></span>
            
        </div>
          <div class="input-field ">
            <input type="text" :class="{ 'invalid': $v.form.Whatsapp.$error }" v-model.trim="$v.form.Whatsapp.$model"   />
          
          <label for="last_name">Whatsapp</label>
          <span v-if="submitStatus && !$v.form.Whatsapp.required.$error"  :class="{ 'invalid helper-text': $v.form.Whatsapp.$error }"  data-error="Campo invalido"></span>
           
        </div>
         <div class="input-field ">
          <input type="text"  :class="{ 'invalid': $v.form.Telegram.$error }" v-model.trim="$v.form.Telegram.$model"   />
          <label for="last_name">Telegram</label>
          <span v-if="submitStatus && !$v.form.Telegram.required.$error"  :class="{ 'invalid helper-text': $v.form.Telegram.$error }"  data-error="Campo invalido"></span>
           
        </div>
                <div class="input-field ">
          <input type="text" :class="{ 'invalid': $v.form.TDocumento.$error }" v-model.trim="$v.form.TDocumento.$model"    />
          <label for="last_name">Tipo de documento</label>
          <span v-if="submitStatus && !$v.form.TDocumento.required.$error"  :class="{ 'invalid helper-text': $v.form.TDocumento.$error }"  data-error="Campo invalido"></span>
           
        </div>
        <div class="input-field ">
          <input  type="text" :class="{ 'invalid': $v.form.Documento.$error }" v-model.trim="$v.form.Documento.$model"   />
          <label for="last_name">N° de documentos</label>
           <span v-if="submitStatus && !$v.form.Documento.required.$error"  :class="{ 'invalid helper-text': $v.form.Documento.$error }"  data-error="Campo invalido"></span>
           
        </div> 
     
     
          <div class="input-field ">
           <input  type="text"  :class="{ 'invalid': $v.form.Nacionalidad.$error }" v-model.trim="$v.form.Nacionalidad.$model"   />
          <label for="last_name">Nacionalidad</label>
           
        </div>
       
          <div class="input-field ">
          <input type="text"   @input="fecha"/>
          <label for="last_name">Fecha de emision</label>
          </div>
      
        <div class="input-field ">
          <input type="text"   />
          <label for="last_name">Fecha de coducidad</label>
            </div>
        
 
      


          <div class="input-field ">
          <input type="text"  :class="{ 'invalid': $v.form.Ocupacion.$error }" v-model.trim="$v.form.Ocupacion.$model"   />
          <label for="last_name">Ocupacion</label>
          <span v-if="submitStatus && !$v.form.Ocupacion.required.$error"  :class="{ 'invalid helper-text': $v.form.Ocupacion.$error }"  data-error="Campo invalido"></span>
        </div>
        <div class="input-field  ">
          <input type="text"  ref="IngresoMensual" :class="{ 'invalid': $v.form.INgresoMensual.$error }" v-model.trim="$v.form.INgresoMensual.$model"    />
          <label for="last_name">Ingresos mensuales</label>
          <span v-if="submitStatus && !$v.form.INgresoMensual.required.$error"  :class="{ 'invalid helper-text': $v.form.Ocupacion.$error }"  data-error="Campo invalido"></span>
        
        </div>
         <div class="file-field input-field">
      <div class="btn-small blue darken-4">
        <span>Scanner Documento con fotografia </span>
        <input type="file" multiple>
      </div>
     <br>
     <br>
     <br>
     <br>
    </div>

                  </div>


                 <div class="col s4">
            
     <div class="input-field ">
          <input type="text" name="name"  id="first_name" class="validate" />
          <label for="last_name">Retiro de ventanilla</label>
        </div>
        <div class="input-field ">
          <input type="text" class="validate" />
          <label for="last_name">Nombre del pagador</label>
        </div>
    

      
          <div class="input-field">
          <input type="text" name="name"  id="first_name" class="validate" />
          <label for="last_name">De posito cuenta</label>
        </div>
        <div class="input-field">
          <input type="text" class="validate" />
          <label for="last_name">Nombre del banco</label>
        </div>
        
   <div class="input-field ">
          <input type="text" name="name"  id="first_name" class="validate" />
          <label for="last_name">Beneficiario N°</label>
        </div>
        <div class="input-field">
                    <input type="text" :class="{ 'invalid': $v.form.Nombres.$error }" v-model.trim="$v.form.Nombres.$model" />
                    <label for="last_name">Nombres</label>
                    <span v-if="submitStatus && !$v.form.Nombres.required.$error"  :class="{ 'invalid helper-text': $v.form.Nombres.$error }"  data-error="Campo invalido"></span>
                  </div>
                  <div class="input-field ">
                    <input type="text" :class="{ 'invalid': $v.form.Apellidos.$error }" v-model.trim="$v.form.Apellidos.$model" />
                    <label for="last_name">Apellidos</label>
                     <span v-if="submitStatus && !$v.form.Apellidos.required.$error"  :class="{ 'invalid helper-text': $v.form.Apellidos.$error }"  data-error="Campo invalido"></span>
                  </div>
               <div class="row">
          <div class="input-field col s7 ">
          <input type="text" :class="{ 'invalid': $v.form.Direccion.$error }" v-model.trim="$v.form.Direccion.$model"  />
          <label for="last_name">Direccion</label>
          <span v-if="submitStatus && !$v.form.Direccion.required.$error"  :class="{ 'invalid helper-text': $v.form.Direccion.$error }"  data-error="Campo invalido"></span>
                  
        </div>
        <div class="input-field col s5">
          <input type="text"  :class="{ 'invalid': $v.form.Postal.$error }" v-model.trim="$v.form.Postal.$model"  />
          <label for="last_name">Codigo Postal</label>
           <span v-if="submitStatus && !$v.form.Postal.required.$error"  :class="{ 'invalid helper-text': $v.form.Postal.$error }"  data-error="Campo invalido"></span>
             
        </div>
        </div>
          <div class="input-field ">
                <input type="text" :class="{ 'invalid': $v.form.Ciudad.$error }" v-model.trim="$v.form.Ciudad.$model"/>
                <label for="last_name">Cuidad</label>
                 <span v-if="submitStatus && !$v.form.Ciudad.required.$error"  :class="{ 'invalid helper-text': $v.form.Ciudad.$error }"  data-error="Campo invalido"></span>
             
              </div>
            <div class="input-field ">
                <input type="text" :class="{ 'invalid': $v.form.Pais.$error }" v-model.trim="$v.form.Pais.$model" />
                <label for="last_name">Pais</label>
                 <span v-if="submitStatus && !$v.form.Pais.required.$error"  :class="{ 'invalid helper-text': $v.form.Pais.$error }"  data-error="Campo invalido"></span>
             
              </div>

        <div class="row">
          <div class="input-field col s6">
          <input type="text" :class="{ 'invalid': $v.form.Movil.$error }" v-model.trim="$v.form.Movil.$model" @input="acceptNumber" />
          <label for="last_name">N° movil</label>
           <span v-if="submitStatus && !$v.form.Movil.required.$error"  :class="{ 'invalid helper-text': $v.form.Movil.$error }"  data-error="Campo invalido"></span>
             
        </div>
        <div class="input-field col s6">
          <input type="text" :class="{ 'invalid': $v.form.MovilAux.$error }" v-model.trim="$v.form.MovilAux.$model"  @input="acceptNumber"/>
          <label for="last_name">N° movil auxiliar</label>
          <span v-if="submitStatus && !$v.form.MovilAux.required.$error"  :class="{ 'invalid helper-text': $v.form.MovilAux.$error }"  data-error="Campo invalido"></span>
             
        </div>
      </div>
            <div class="input-field ">
          <input type="text"  :class="{ 'invalid': $v.form.Facebook.$error }" v-model.trim="$v.form.Facebook.$model"  /> 
          <label for="last_name">Facebook</label>
            
        </div>
        <div class="input-field ">
          <input type="text" :class="{ 'invalid': $v.form.Mail.$error }" v-model.trim="$v.form.Mail.$model"   />
          <label for="last_name">Mail</label>
          <span v-if="submitStatus && !$v.form.Mail.required.$error"  :class="{ 'invalid helper-text': $v.form.Mail.$error }"  data-error="Campo invalido"></span>
            
        </div>
          <div class="input-field ">
            <input type="text" :class="{ 'invalid': $v.form.Whatsapp.$error }" v-model.trim="$v.form.Whatsapp.$model"   />
          
          <label for="last_name">Whatsapp</label>
          <span v-if="submitStatus && !$v.form.Whatsapp.required.$error"  :class="{ 'invalid helper-text': $v.form.Whatsapp.$error }"  data-error="Campo invalido"></span>
           
        </div>
         <div class="input-field ">
          <input type="text"  :class="{ 'invalid': $v.form.Telegram.$error }" v-model.trim="$v.form.Telegram.$model"   />
          <label for="last_name">Telegram</label>
          <span v-if="submitStatus && !$v.form.Telegram.required.$error"  :class="{ 'invalid helper-text': $v.form.Telegram.$error }"  data-error="Campo invalido"></span>
           
        </div>
                <div class="input-field ">
          <input type="text" :class="{ 'invalid': $v.form.TDocumento.$error }" v-model.trim="$v.form.TDocumento.$model"    />
          <label for="last_name">Tipo de documento</label>
          <span v-if="submitStatus && !$v.form.TDocumento.required.$error"  :class="{ 'invalid helper-text': $v.form.TDocumento.$error }"  data-error="Campo invalido"></span>
           
        </div>
        <div class="input-field ">
          <input  type="text" :class="{ 'invalid': $v.form.Documento.$error }"   />
          <label for="last_name">N° de documentos</label>
          <span v-if="submitStatus && !$v.form.Documento.required.$error"  :class="{ 'invalid helper-text': $v.form.Documento.$error }"  data-error="Campo invalido"></span>
        </div> 
     
     
          <div class="input-field ">
           <input  type="text"   />
          <label for="last_name">Nacionalidad</label>
        </div>





                 </div>
                  <div class="col s4">
                    
        
        <div class="input-field ">
          <input  type="text" :class="{ 'invalid': $v.form.DirecionDeBanco.$error }" v-model.trim="$v.form.DirecionDeBanco.$model"  @input="DirecionDeBanco" />
          <label for="last_name">Direccion de banco</label>
        </div>
         <div class="input-field ">
         <input class="validate"  type="text"/> 
          <label for="last_name">Tipo de cuenta</label>
        </div>
          <div class="input-field ">
         <input :class="{ 'invalid': $v.form.NuAgencia.$error }" v-model.trim="$v.form.NuAgencia.$model" type="text" @input="acceptNumber"/> 
          <label for="last_name">N° tel agencia</label>
        </div>
     
        

       

         <div class="input-field ">
          <input type="text" name="name"  id="first_name" class="validate"  />
          <label for="last_name">N° Cart Fidelid</label>
        </div>
         <div class="input-field ">
          <input type="text" name="name"  id="first_name" class="validate" />
          <label for="last_name">N° Cart Credit</label>
        </div>
        <div class="input-field ">
          <input type="text" class="validate" />
          <label for="last_name">Envio N°</label>
        </div>
         <div class="input-field ">
          <input type="text" name="name"  id="first_name" class="validate"  />
          <label for="last_name">Seq A agencia</label>
        </div>
         <div class="input-field ">
          <input type="text" name="name"  id="first_name" class="validate" />
          <label for="last_name">Codigo N°</label>
        </div>
         <div class="input-field ">
         <input type="text"   @input="fecha">
          <label for="last_name">Fecha</label>
        </div>
      
                   <div class="input-field ">
          <input type="text"  ref="monto" />
          <label for="last_name">Monto a Enviar</label>
        </div>
         <div class="input-field ">
          <input type="text" ref="comision" class="validate" />
          <label for="last_name">Comision</label>
        </div>
         <div class="input-field ">
         <input type="text" ref="monto">
          <label for="last_name">Cambio</label>
        </div>
          <div class="input-field ">
         <input type="text" ref="monto" >
          <label for="last_name">Total a Cobrar</label>
        </div>
         <div class="input-field ">
         <input type="text" ref="totalP" >
          <label for="last_name">Total a pagar</label>
        </div>
        


                  </div>
              </div>


    


      


   
 

         
         



 

          <!-- <div class="row justify-content-center ">
          <div class="input-field col s5 offset-s4 ">
          <input v-validate="'required|email'" name="email" type="text">
         
          <label for="last_name">Concepto</label>
          <span class="helper-text" style="font-size:10px">Comentario de uso personal</span>
        </div>
        </div> -->
     <button class="waves-effect waves-light btn blue darken-4" :disabled="$v.form.$invalid" type="submit">Transferir</button>
     
           </form>
          </div>
        </div>
       </div>
      </div>
    </div>
  </div>
</div>

 
</template>

<script>
import AutoNumeric from "autonumeric";
const {decimal,numeric, maxLength,url,email,required ,alpha,alphaNum,minLength} = require('vuelidate/lib/validators')

import M from 'materialize-css'

export default {
 name: 'App',
mounted () {
    M.AutoInit()
  new AutoNumeric(this.$refs.monto,'commaDecimalCharDotSeparator');
    new AutoNumeric(this.$refs.comision,'commaDecimalCharDotSeparator');
  new AutoNumeric(this.$refs.totalP,'commaDecimalCharDotSeparator');
  new AutoNumeric(this.$refs.IngresoMensual,'commaDecimalCharDotSeparator');
  
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
      format:'dd-mm-yyyy'
    });
    
   
  });
},
 data: () => {
    return {
      form: {
        Expediteur:"",
        Nombres:"",
        Apellidos:"",
        Direccion:"",
        Postal:"",
        Ciudad:"",
        Pais:"",
        Movil:"",
        MovilAux:"",
        Facebook:"",
        Mail:"",
        Whatsapp:"",
        Telegram:"",
        TDocumento:"",
        Documento:"",
        Nacionalidad:"",
        FechaE:null,
        FechaC:"",
        Ocupacion:"",
        INgresoMensual:"",



        
        DirecionDeBanco:"",
        TipoDeCuenta:"",
        NuAgencia:"",
        CardFidelid:"",
        CartCredit:"",
        Envion:"",
        Fecha:"",
        beneficiario:{
          
          Nombres:"",
        Apellidos:"",
        Direccion:"",
        Postal:"",
        Ciudad:"",
        Pais:"",
        Movil:"",
        MovilAux:"",
        Facebook:"",
        Mail:"",
        Whatsapp:"",
        Telegram:"",
        TDocumento:"",
        Documento:"",
        Nacionalidad:"",
        }
       
      },
      date:null,
    value:null,
     submitStatus: null
      
    };
  }, 
   validations: {
     form:{
       
       Expediteur: {
      required,
      alphaNum,
      minLength: minLength(3)
     
    },
     Nombres:{
      required,
      alpha,
      minLength: minLength(3)
     
    },
        Apellidos:{
      required,
      alpha,
      minLength: minLength(3)
     
    },
        Direccion:{
      required,
      alpha,
      minLength: minLength(8)
     
    },
        Postal:{
      required,
      alphaNum,
      numeric,
      minLength: minLength(4)
     
    },
        Ciudad:{
      required,
      alpha,
      minLength: minLength(3)
     
    },
        Pais:{
      required,
      alpha,
      minLength: minLength(4)
     
    },
        Movil:{
      required,
     
      minLength: minLength(6)
     
    },
        MovilAux:{
      required,
    
      minLength: minLength(6)
     
    },
     Facebook:{
      required,
      url,
      minLength: minLength(3)
     
    },
        Mail:{
      required,
      email,
      minLength: minLength(3)
     
    },
        Whatsapp:{
      required,
      alphaNum,
      numeric
      
     
    },
        Telegram:{
      required:true,
      minLength: minLength(3)
     
    },
        TDocumento:{
      required,
      alpha,
      maxLength: maxLength(1)
     
    },
        Documento:{
      required,
       numeric,
      minLength: minLength(3),
     
     
    },
        Nacionalidad:{
      required,
      alpha,
      minLength: minLength(3)
     
    },
       
        Ocupacion:{
      required,
      minLength: minLength(3)
     
    },
        INgresoMensual:{
      required,
      decimal:false,
     
      minLength: minLength(3)
     
    },
    DirecionDeBanco:{
       required,
    },
     
     NuAgencia:{
       required,
    }

     }
    
  },
    methods: {
  	acceptNumber() {
     	var x = this.form.MovilAux.replace(/\D/g, '').match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
   this.form.MovilAux = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
   	var y = this.form.Movil.replace(/\D/g, '').match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
   this.form.Movil = !y[2] ? y[1] : '(' + y[1] + ') ' + y[2] + (y[3] ? '-' + y[3] : '');
  	var z = this.form.NuAgencia.replace(/\D/g, '').match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
   this.form.NuAgencia = !z[2] ? z[1] : '(' + z[1] + ') ' + z[2] + (z[3] ? '-' + z[3] : '');
 
    },
    DirecionDeBanco() {
     	var x = this.form.DirecionDeBanco.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
        this.form.DirecionDeBanco= !x[2] ? x[1] :  x[1] + '-' +x[2] +  (x[3] ? '-' + x[3] : '')+ (x[4] ? '-' + x[4] : '')+ (x[5] ? '-' + x[5] : '')
 
    },
     fecha() {
     	var x = this.form.Fecha.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
          this.form.Fecha= !x[2] ? x[1] :  x[1] + '-' +x[2] +  (x[3] ? '-' + x[3] : '')
 
    },
 
     submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
    }

}


</script>

<style>
.input-field {
    position: relative;
    
    margin-bottom: 0rem !important;
}
.row{
  margin-bottom: auto  !important;
}
</style>