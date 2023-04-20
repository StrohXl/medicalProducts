import axios from "axios";
import Cookies from 'js-cookie'
const token = Cookies.get('token')
token == undefined?
'':
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
