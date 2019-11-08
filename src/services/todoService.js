import {
    getRequest, postRequest, deleteRequest, putRequest,
} from '../utils/api';

export async function getTodos() {
    let data;
    try {
        const response = await getRequest('/getTodos/');
        if (!response.ok) throw new Error('Response not ok!');
        data = await response.json();
        if (data.status !== 'successful') throw new Error(`Response data status: ${data.status}`);
    } catch (err) {
        console.log(err);
    }
    return data.todos;
}

export async function addTodo(body) {
    try {
        const response = await postRequest('/addTodo/', body);
        if (!response.ok) throw new Error('Response not ok!');
        const data = await response.json();
        if (data.status !== 'successful') throw new Error(`Response data status: ${data.status}`);
    } catch (err) {
        console.log(err);
    }
}

export async function deleteTodo(params) {
    try {
        const response = await deleteRequest('/deleteTodo/', params);
        if (!response.ok) throw new Error('Response not ok!');
        const data = await response.json();
        if (data.status !== 'successful') throw new Error(`Response data status: ${data.status}`);
    } catch (err) {
        console.log(err);
    }
}

export async function editTodo(params, body) {
    try {
        const response = await putRequest('/editTodo/', params, body);
        if (!response.ok) throw new Error('Response not ok!');
        const data = await response.json();
        if (data.status !== 'successful') throw new Error(`Response data status: ${data.status}`);
    } catch (err) {
        console.log(err);
    }
}
