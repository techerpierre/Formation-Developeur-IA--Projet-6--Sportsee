import { MockActivityRepository } from "@/adapters/repositories/mock/activity";
import { MockAuthRepository } from "@/adapters/repositories/mock/auth";
import { MockUserRepository } from "@/adapters/repositories/mock/user";
import { SessionRepository } from "@/adapters/repositories/session";
import { Core } from "@/core";

export default new Core({
    repositories: {
        auth: new MockAuthRepository(),
        session: new SessionRepository(),
        user: new MockUserRepository(),
        activity: new MockActivityRepository(),
    },
});