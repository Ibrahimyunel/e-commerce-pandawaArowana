import Swal from "sweetalert2";
import { swalConfig } from "../reusable/handleSwal";
const reader = new FileReader();

export function readImageValidation(e, set) {
    const imageObj = e.target.files[0];
    if (imageObj.type === "" || !imageObj.type.includes('image/')) {
        swalConfig.text = "Maaf upload gagal, format gambar tidak valid";
        Swal.fire(swalConfig).then(() => e.target.value = "");
        return false;
    } else {
        convertFileToBase64(imageObj, set);
        return imageObj;
    }
}

const convertFileToBase64 = (file, set) => {
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        set(reader.result);
    }
}