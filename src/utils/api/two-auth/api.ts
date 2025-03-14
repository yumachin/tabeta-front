// const LOCAL_API_URL = 'http://localhost:8000';
const LOCAL_API_URL = 'https://160.251.136.146';

// ➀ emailを取得する
export const getEmail = async (user_id: number) => {
    try {
        if (!user_id) throw new Error("User ID not found in localStorage");
        const res = await fetch(`${LOCAL_API_URL}/api/get-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id }), 
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        if (data.message === "Success") {
            return data.details;
        } else {
            throw new Error("API returned an error");
        }
    } catch (error) {
        console.error("Get email API error", error);
        throw new Error("Failed to get email");
    }
};


// ② mailをおくり、onetime-passを取得する
export const createCode = async (user_id: number, email: string): Promise<boolean> => {
    try {
        const res = await fetch(`${LOCAL_API_URL}/api/create-code`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: String(user_id), email }),
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        if (data.message === "Success") {
            return true;
        } else {
            throw new Error("API returned an error");
        }
    } catch (error) {
        console.error("Create code API error", error);
        throw new Error("Failed to create code");
    }
};


// ③コードの確認
export const cheackCode = async (user_id: number, code: string): Promise<string> => {
    try {
        const res = await fetch(`${LOCAL_API_URL}/api/check-code`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: String(user_id), code }),
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data.details;

    } catch (error) {
        console.error("Cheack code API error", error);
        throw new Error("Failed to check code");
    }
};