import dynamic from 'next/dynamic';
import { useUserRole } from '../hooks/useUserRole';

const AdminComponent = dynamic(() => import('../components/AdminComponent'));
const EditorComponent = dynamic(() => import('../components/EditorComponent'));
const ViewerComponent = dynamic(() => import('../components/ViewerComponent'));

export default function UserRole() {
    const userRole = useUserRole();

    return (
        <div>
            <h1>Loading Components Based on User Role</h1>
            {userRole === 'admin' && <AdminComponent />}
            {userRole === 'editor' && <EditorComponent />}
            {userRole === 'viewer' && <ViewerComponent />}
        </div>
    );
}