import { IActivityRepository, IAuthRepository, ISessionRepository, IUserRepository } from "./ports/repositories";
import { ActivityService } from "./services/activity";
import { AuthService } from "./services/auth";
import { SessionService } from "./services/session";
import { UserService } from "./services/user";

type CoreDeps = {
    repositories: {
        auth: IAuthRepository;
        session: ISessionRepository;
        user: IUserRepository;
        activity: IActivityRepository;
    };
};

export class Core {
    readonly auth: AuthService;
    readonly session: SessionService;
    readonly user: UserService;
    readonly activity: ActivityService;

    constructor(deps: CoreDeps) {
        this.auth = new AuthService(deps.repositories.auth, deps.repositories.session);
        this.session = new SessionService(deps.repositories.session);
        this.user = new UserService(deps.repositories.user);
        this.activity = new ActivityService(deps.repositories.activity)
    }
}