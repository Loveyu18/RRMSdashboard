export default function a(){return{validate(a){return{valid:a.value===""||/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(a.value)||/^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(a.value)}}}}