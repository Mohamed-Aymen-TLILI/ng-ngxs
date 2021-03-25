
import { User } from '../models/Users';

export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: User) {}
}