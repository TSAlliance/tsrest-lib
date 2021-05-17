import { ApiError } from "./apiError";

export class PermissionDeniedError extends ApiError {
    constructor() {
        super("Permission denied. This means that you are missing some permissions.", 403, "PERMISSION_DENIED_ERROR");
    }
}
