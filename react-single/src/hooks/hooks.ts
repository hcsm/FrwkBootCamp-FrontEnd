import { toast } from "react-toastify";

export function customHooks() {}

export function useToastError(msg: string | undefined){
  return msg ? toast.error(msg) : null
}
