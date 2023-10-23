const usersModel = {
    getAll:`
            SELECT 
                * 
            FROM 
                Users`,

    getByID : `
            SELECT
                *
            FROM
                Users
            WHERE
                id = ?
            `,
    
    addRow: `
            INSERT INTO
                Users (
                    Username,
                    email,
                    password,
                    name,
                    lastname,
                    phone_number,
                    role_id,
                    Is_active
                ) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    
    getByUsername: `
            SELECT 
                id 
            FROM
                Users
            WHERE
                Username = ?
    `,

    getByEmail: `
            SELECT 
                id
            FROM
                Users
            WHERE
                email = ?
    `, 

    updateUser: `
         UPDATE Users
         SET 
             Username = ?,
             email = ?,
             password = ?,
             name = ?,
             lastname = ?,
             phone_number = ?,
             Is_active = ?
         WHERE
             id = ?
  `,
updateRow: `
         PENDIENTE

`,
deleteRow:`
        UPDATE
            Users
            SET
            Is_active = 0
            WHERE
            ID =?
`
}

module.exports = usersModel;