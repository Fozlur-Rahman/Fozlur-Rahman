import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    return (
        <div className='text-white'>
            <div className='flex mb-10 justify-between'>
                <h1 className="text-2xl">Total Projects: 10</h1>
                <Link className='bg-[var(--body-color)] px-4 py-2 capitalize rounded'>create new</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Technology</th>
                        <th>Stack</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Project A</td>
                        <td>blog</td>
                        <td>React tailwind node express </td>
                        <td>MERN Stack</td>
                        <td><button>Update</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Project B</td>
                        <td>Personal</td>
                        <td>React bootstrap firebase</td>
                        <td>Front-End</td>
                        <td><button>Update</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Project B</td>
                        <td>Mobile App</td>
                        <td>React Native</td>
                        <td>MEAN Stack</td>
                        <td><button>Update</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Project B</td>
                        <td>Mobile App</td>
                        <td>React Native</td>
                        <td>MEAN Stack</td>
                        <td><button>Update</button></td>
                        <td><button>Delete</button></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Projects; <h1>projects</h1>