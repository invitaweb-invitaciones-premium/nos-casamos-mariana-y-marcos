/* ═══ CIERRE DE LA TARJETA ═══
   Pasada esta fecha, index.html e invitacion.html redirigen a cerrado.html.
   Hora de Uruguay (UTC-3). Para cambiar el día, editá la fecha de abajo.
   Cierra al terminar el 18 de noviembre = 19 de noviembre 00:00 hs. */
(function(){
  var CIERRE = new Date('2026-11-19T00:00:00-03:00').getTime();
  if (Date.now() >= CIERRE) { location.replace('cerrado.html'); }
})();
