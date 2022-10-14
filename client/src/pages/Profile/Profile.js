import styles from './Profile.module.scss';

function Profile() {
  return (
    <div className="flex-fill d-flex justify-content-center align-items-center">
      <div className={`${styles.profileContainer} card p-20`}>
        <h3 className="mb-20">Page de profil</h3>
        <ul>
          <li>Nom : </li>
          <li>Email : </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
