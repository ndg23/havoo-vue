export interface User {
    email: string;
    password?: string;
    phone: string;
    fullName: string;
    id?: string;
    role: string;
    status: string;
}

export interface Review {
    content: string;
    author: User;
    addressId: number;
    note: number;
    id?: string;

}

export interface Address {
    batNbr: number;
    author: string;
    streetNumber: string;
    adCode: number;
    adType: string;
    numBat: string;
    quarter: string;
    ratingMoy: string;
    created_at?: string;
    updated_at?: string;
}

// "id": 124,
// "streetNumber": "\"1998\"",
// "adCode": "GN\"1998\"\"01\"",
// "quarter": "Grand ndg",
// "numBat": "\"01\"",
// "desc": null,
// "filename": "1711914278944-1235",
// "filelink": "http://192.168.1.153:9000/adwahi/1711914278944-1235?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=kt024bGcLnb7BWKI%2F20240331%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240331T194440Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6db00ae1133c2503ab650498c5ab60777905e5ac4ca6e0fc8cc8a1a08014b54d",
// "ratingMoy": null,
// "adType": "Habitation",
// "created_at": "2024-03-31T19:44:40.199Z",
// "updated_at": "2024-03-31T19:44:40.199Z",
// "reviews": []


export interface Session {
    auth_token: string;
    user: User;
    user_id: number;
}
