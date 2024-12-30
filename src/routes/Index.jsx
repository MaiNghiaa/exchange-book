import { lazy, memo, useEffect, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LandingPage from "../pages/LandingPage";
import { PATH_HOME, PATH_LISTBOOK } from "./path";
import BookCategory from "../pages/BookCategory";

const PageLayout = lazy(() => import("../Layouts/Layout"));

function Router() {
    const location = useLocation();

    const routes = [
        {
            element: (
                <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key || ""}
                            timeout={{ enter: 300, exit: 300 }}
                            classNames="fade"
                        >
                            <PageLayout>
                                <LandingPage />
                            </PageLayout>
                        </CSSTransition>
                    </TransitionGroup>
                </Suspense>
            ),
            children: [
                { path: PATH_HOME, element: <LandingPage /> },
                { path: PATH_LISTBOOK, element: <BookCategory /> }
            ],
        },
    ];

    useEffect(() => { }, []);

    return useRoutes(routes);
}

export default memo(Router);
